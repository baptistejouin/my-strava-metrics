export type Activities = Activity[]

export interface Activity {
	id: number
	resource_state: number
	external_id: string
	upload_id: number
	athlete: Athlete
	name: string
	distance: number
	moving_time: number
	elapsed_time: number
	total_elevation_gain: number
	type: string
	sport_type: string
	start_date: string
	start_date_local: string
	timezone: string
	location_city: string | null
	location_state: string | null
	location_country: string
	utc_offset: number
	start_latlng: number[]
	end_latlng: number[]
	achievement_count: number
	kudos_count: number
	comment_count: number
	athlete_count: number
	photo_count: number
	average_heartrate: number
	map: Map
	trainer: boolean
	commute: boolean
	manual: boolean
	private: boolean
	flagged: boolean
	gear_id: string
	from_accepted_tag: boolean
	average_speed: number
	max_speed: number
	average_cadence: number
	average_temp: number
	average_watts: number
	weighted_average_watts: number
	kilojoules: number
	device_watts: boolean
	has_heartrate: boolean
	max_watts: number
	elev_high: number
	elev_low: number
	pr_count: number
	total_photo_count: number
	has_kudoed: boolean
	workout_type: number
	suffer_score: any
	description: string
	calories: number
	segment_efforts: SegmentEffort[]
	splits_metric: SplitsMetric[]
	laps: Lap[]
	gear: Gear
	partner_brand_tag: any
	photos: Photos
	highlighted_kudosers: HighlightedKudoser[]
	hide_from_home: boolean
	device_name: string
	embed_token: string
	segment_leaderboard_opt_out: boolean
	leaderboard_opt_out: boolean
}

interface Map {
	id: string
	polyline: string
	resource_state: number
	summary_polyline: string
}

interface SegmentEffort {
	id: number
	resource_state: number
	name: string
	activity: Activity
	athlete: Athlete
	elapsed_time: number
	moving_time: number
	start_date: string
	start_date_local: string
	distance: number
	start_index: number
	end_index: number
	average_cadence: number
	device_watts: boolean
	average_watts: number
	segment: Segment
	kom_rank: any
	pr_rank: any
	achievements: any[]
	hidden: boolean
}

interface Segment {
	id: number
	resource_state: number
	name: string
	activity_type: string
	distance: number
	average_grade: number
	maximum_grade: number
	elevation_high: number
	elevation_low: number
	start_latlng: number[]
	end_latlng: number[]
	climb_category: number
	city: string
	state: string
	country: string
	private: boolean
	hazardous: boolean
	starred: boolean
}

interface SplitsMetric {
	distance: number
	elapsed_time: number
	elevation_difference: number
	moving_time: number
	split: number
	average_speed: number
	average_grade_adjusted_speed: number
	average_heartrate: number
	pace_zone: number
}

interface Lap {
	id: number
	resource_state: number
	name: string
	activity: Activity
	athlete: Athlete
	elapsed_time: number
	moving_time: number
	start_date: string
	start_date_local: string
	distance: number
	start_index: number
	end_index: number
	total_elevation_gain: number
	average_speed: number
	max_speed: number
	average_cadence: number
	device_watts: boolean
	average_watts: number
	lap_index: number
	split: number
}

interface Gear {
	id: string
	primary: boolean
	name: string
	resource_state: number
	distance: number
}

interface Photos {
	primary: Primary
	use_primary_photo: boolean
	count: number
}

interface Primary {
	id: any
	unique_id: string
	urls: Urls
	source: number
}

interface Urls {
	"100": string
	"600": string
}

interface HighlightedKudoser {
	destination_url: string
	display_name: string
	avatar_url: string
	show_name: boolean
}

export type ActivityFormatted = {
	id: number;
	type: string;
	name: string;
	date: string;
	moving_time: string;
	average_speed: string;
	distance: string;
	map_preview: string;
	kudo_count: number;
	average_heartrate: number;
	calories: number;
	total_elevation_gain: number;
}