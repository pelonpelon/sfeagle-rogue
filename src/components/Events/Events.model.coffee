'use strict'
# Events.model.coffee

Events = {}

Event = (data)->
  data = data or {}
  @_dp_original = data._dp_original
  @_thumbnail_id = data._thumbnail_id
  @band_1 = data['band_#1']
  @band_1_link = data.['band_#1_link']
  @band_2 = data.['band_#2']
  @band_2_link = data.['band_#2_link']
  @band_3 = data.['band_#3']
  @band_3_link = data.['band_#3_link']
  @band_4 = data.['band_#4']
  @band_4_link = data.['band_#4_link']
  @contact_name = data.contact_name
  @crowd = data.crowd.match(/\w{3,}/g)
  @date = data.date
  @date_num = data.date_num
  @dj_name = data.dj_name
  @endtime = data.endtime
  @include_a_lead = data.include_a_lead
  @include_title = data.include_title
  @link = data.link
  @notes = data.notes
  @price = data.price
  @promoter = data.promoter
  @promoter_link = data.promoter_link
  @publish = data.publish
  @tease = data.tease
  @time = data.time
  @title = data.title
  @title_thumbnail = data.title_thumbnail
  @web_site = data.web_site
  @weekly = data.weekly

req (args)->
  m.request(args)

m.request
  method: 'GET'
  url: config.version + '/assets/events.json'
  type: Events.Event
.then (events)->
  localStorage.setItem 'events', JSON.stringify(events)
