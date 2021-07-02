class MysignupController < ApplicationController
  layout "login"
  protect_from_forgery except: [:genre,:updateinfo, :updatebio, :new]
  def new
    render template: "users/registrations/new", layout: false
  end
  def addbio
    render template: "users/registrations/editbio", layout: false
  end
  def profile
    redirect_to myprofile_path(username: current_user.username)
  end
  def signout
    sign_out current_user
    redirect_to root_path, notice: "Logged out."
  rescue     
    redirect_to root_path, notice: "Logged out."

  end
  def chosemyphoto
    @image=Image.find(params[:imageid])
    render layout: false
  end
  def chosemyppic
    @image=Image.find(params[:imageid])
    render layout: false
  end
  def myphotos
    render layout: false
  end
  def myprofilephotos
    render layout: false
  end
  def create
    @user = User.new(user_params)
    p @user.errors
    if @user.save
      fn=@user.firstname.squish.parameterize.gsub('-','.')
      ln=@user.lastname.squish.parameterize.gsub('-','.')
      @nb=""
      @username="#{fn}.#{ln}#{@nb}"
      while User.where(username: @username).length > 0 do
        @nb=@nb.to_i+1
        @username="#{fn}.#{ln}#{@nb}"
      end
      @user.update(username: @username,displaygenre: true)
      sign_in @user
      redirect_to root_path
    else
    redirect_to login_path

    end
  end
  def updateinfo
    @user=User.find(params[:id])
    view = params[:view]
    @cancel = params[:cancel] && params[:cancel] == 'true'
    @user.update(user_params)
    if !@cancel

      render layout: false, template: "mysignup/#{view}"
    else

      render layout: false, template: "myuserpage/#{view}"
    end
  end
  def updatebio
    @user=User.find(params[:id])
    view = params[:view]
    @cancel = params[:cancel] && params[:cancel] == 'true'
      @user.update(user_params)
      @user.errors
    render layout: false
  end
  def mydatefield
    render layout: false
  end
  def mygenrefield
      @genres=[['à lui : souhaite lui un bon anniversaire','il'],
        ['à elle : souhaite lui un bon anniversaire','elle'],
        ['à neutre : souhaite lui un bon anniversaire','on']
      ]

    render layout: false
  end
  def myorientation
    render layout: false
  end
  def genre
    if params[:mygenre] == "p"
      @genres=[['à lui : souhaite lui un bon anniversaire','il'],
        ['à elle : souhaite lui un bon anniversaire','elle'],
        ['à neutre : souhaite lui un bon anniversaire','on']
      ]
      @string = "<div class=\"myowngenre col-12\"><%=select(\"user\", \"genre\", @genres, { include_blank: true })%></div><div class=\"myowngenre col-12\"><%=text_field(\"user\", \"myothergenre\",placeholder: \"Genre (facultatif)\")%></div>"
    else
      @string = "<div class=\"myowngenre\"></div>"
    end
    p @string
    render inline: @string
  end
  private
  def user_params
    params.require(:user).permit("dateofbirth1(2i)", "dateofbirth1(3i)",:image_id,:bio, "dateofbirth2(1i)",:interestedwomen, :interestedmen, "firstname",:displaygenre, :image_id,:bannerimage_id, :image,:bannerimage,"lastname", "email", "password", "dateofbirth(1i)", "dateofbirth(2i)","dateofbirth(3i)","dateofbirth","genre","myothergenre",:image_attributes=>{},"dateofbirth"=>{},"bannerimage"=>{},"image"=>{})
  end
end
