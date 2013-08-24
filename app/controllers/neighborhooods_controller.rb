class NeighborhooodsController < ApplicationController
  # GET /neighborhooods
  # GET /neighborhooods.json
  def index
    @neighborhooods = Neighborhoood.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @neighborhooods }
    end
  end

  # GET /neighborhooods/1
  # GET /neighborhooods/1.json
  def show
    @neighborhoood = Neighborhoood.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @neighborhoood }
    end
  end

  # GET /neighborhooods/new
  # GET /neighborhooods/new.json
  def new
    @neighborhoood = Neighborhoood.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @neighborhoood }
    end
  end

  # GET /neighborhooods/1/edit
  def edit
    @neighborhoood = Neighborhoood.find(params[:id])
  end

  # POST /neighborhooods
  # POST /neighborhooods.json
  def create
    @neighborhoood = Neighborhoood.new(params[:neighborhoood])

    respond_to do |format|
      if @neighborhoood.save
        format.html { redirect_to @neighborhoood, notice: 'Neighborhoood was successfully created.' }
        format.json { render json: @neighborhoood, status: :created, location: @neighborhoood }
      else
        format.html { render action: "new" }
        format.json { render json: @neighborhoood.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /neighborhooods/1
  # PUT /neighborhooods/1.json
  def update
    @neighborhoood = Neighborhoood.find(params[:id])

    respond_to do |format|
      if @neighborhoood.update_attributes(params[:neighborhoood])
        format.html { redirect_to @neighborhoood, notice: 'Neighborhoood was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @neighborhoood.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /neighborhooods/1
  # DELETE /neighborhooods/1.json
  def destroy
    @neighborhoood = Neighborhoood.find(params[:id])
    @neighborhoood.destroy

    respond_to do |format|
      format.html { redirect_to neighborhooods_url }
      format.json { head :no_content }
    end
  end
end
