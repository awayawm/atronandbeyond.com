import reading_pgn_from_the_dgt_electronic_chessboard
    from './markdown/full/reading-pgn-from-the-dgt-electronic-chessboard.mdx'
import unitywebrequest_and_tmp_dropdown_making_a_dynamic_dropdown_in_unity
    from './markdown/full/unitywebrequest-and-tmp-dropdown-making-a-dynamic-dropdown-in-unity.mdx'
import building_a_discord_bot_with_discord_js from './markdown/full/building-a-discord-bot-with-discord-js.mdx'
import checking_out_the_mc_707_fireware_update_1_72
    from './markdown/full/checking-out-the-mc-707-fireware-update-1-72.mdx'
import creating_a_custom_toolchain_for_react from './markdown/full/creating-a-custom-toolchain-for-react.mdx'
import mounting_volume_made_from_snapshot_to_ec2 from './markdown/full/mounting-volume-made-from-snapshot-to-ec2.mdx'
import recording_audio_over_usb_otg_with_the_mc_707
    from './markdown/full/recording-audio-over-usb-otg-with-the-mc-707.mdx'

import reading_pgn_from_the_dgt_electronic_chessboard_preview
    from './markdown/preview/reading-pgn-from-the-dgt-electronic-chessboard-preview.mdx'
import unitywebrequest_and_tmp_dropdown_making_a_dynamic_dropdown_in_unity_preview
    from './markdown/preview/unitywebrequest-and-tmp-dropdown-making-a-dynamic-dropdown-in-unity-preview.mdx'
import building_a_discord_bot_with_discord_js_preview
    from './markdown/preview/building-a-discord-bot-with-discord-js-preview.mdx'
import checking_out_the_mc_707_fireware_update_1_72_preview
    from './markdown/preview/checking-out-the-mc-707-fireware-update-1-72-preview.mdx'
import creating_a_custom_toolchain_for_react_preview
    from './markdown/preview/creating-a-custom-toolchain-for-react-preview.mdx'
import mounting_volume_made_from_snapshot_to_ec2_preview
    from './markdown/preview/mounting-volume-made-from-snapshot-to-ec2-preview.mdx'
import recording_audio_over_usb_otg_with_the_mc_707_preview
    from './markdown/preview/recording-audio-over-usb-otg-with-the-mc-707-preview.mdx'

let config = {
    favicon: "https://s3.us-west-2.amazonaws.com/atronandbeyond.com/favicon.ico",
    url: 'https://atronandbeyond.com',
    header: {
        title: "atronandbeyond.com",
        tagline: "Beats and Code"
    },
    footer: {
        tagline: 'atronandbeyond.com © 2021',
        github: "https://github.com/awayawm",
        linkedin: "https://www.linkedin.com/in/aaron-myers-88b52683",
        twitter: ""
    },
    tags: [
        {
            id: 1,
            name: "Home",
            link: "/",
            enabled: true,
            icon: "🏡 ",
        },
        {
            id: 2,
            name: "Chess",
            link: "/tags/chess",
            enabled: false,
            icon: "♟️",
        },
        {
            id: 3,
            name: "Beats",
            link: "/tags/beats",
            enabled: true,
            icon: "🎶",
        },
        {
            id: 4,
            name: "Code",
            link: "/tags/code",
            enabled: true,
            icon: "💻",
        },
        {
            id: 5,
            name: "Aws",
            link: "/tags/aws",
            enabled: false,
            icon: "☁️",
        },

    ],
    articles: [
        {
            enabled: true,
            title: "Reading PGN from the DGT Electronic Chessboard",
            link: "reading-pgn-from-the-dgt-electronic-chessboard",
            tags: [1, 2, 4],
            date: "2021-06-20",
            content: reading_pgn_from_the_dgt_electronic_chessboard,
            preview: reading_pgn_from_the_dgt_electronic_chessboard_preview
        },
        {
            enabled: false,
            title:
                "UnityWebRequest and Tmp_Dropdown: Making a dynamic dropdown in Unity",
            link: "unitywebrequest-and-tmp-dropdown-making-a-dynamic-dropdown-in-unity",
            tags: [3],
            date: "2021-06-20",
            content: unitywebrequest_and_tmp_dropdown_making_a_dynamic_dropdown_in_unity,
            preview: unitywebrequest_and_tmp_dropdown_making_a_dynamic_dropdown_in_unity_preview
        },
        {
            enabled: true,
            title: "Building a Discord Bot with Discord.js",
            link: "building-a-discord-bot-with-discord-js",
            tags: [1, 4],
            date: "2021-06-20",
            content: building_a_discord_bot_with_discord_js,
            preview: building_a_discord_bot_with_discord_js_preview
        },
        {
            enabled: false,
            title: "Checking Out Mc-707 Firmware update 1.72",
            link: "checking-out-the-mc-707-fireware-update-1-72",
            tags: [2],
            date: "2021-06-20",
            content: checking_out_the_mc_707_fireware_update_1_72,
            preview: checking_out_the_mc_707_fireware_update_1_72_preview
        },
        {
            enabled: false,
            title: "Creating a Custom Toolchain for React",
            link: "creating-a-custom-toolchain-for-react",
            tags: [3],
            date: "2021-06-20",
            content: creating_a_custom_toolchain_for_react,
            preview: creating_a_custom_toolchain_for_react_preview
        },
        {
            enabled: false,
            title: "Mounting a Snapshot to an EC2 Machine",
            link: "mounting-volume-made-from-snapshot-to-ec2",
            tags: [1, 5, 4],
            date: "2021-07-02",
            content: mounting_volume_made_from_snapshot_to_ec2,
            preview: mounting_volume_made_from_snapshot_to_ec2_preview
        },
        {
            enabled: true,
            title: "Recording into the MC-707 from a Cell Phone using USB-OTG",
            link: "recording-audio-over-usb-otg-with-the-mc-707",
            tags: [1, 3],
            date: "2021-09-18",
            content: recording_audio_over_usb_otg_with_the_mc_707,
            preview: recording_audio_over_usb_otg_with_the_mc_707_preview
        },
    ],
}
export default config;
