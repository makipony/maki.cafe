import {
	Box,
	Divider,
	Flex,
	Grid,
	GridItem,
	HStack,
	Link,
	Text,
} from "@chakra-ui/react";
import { config } from "../../utils/config";
import { getBackgroundPositionsForSpritesheet } from "../../utils/utils";
import HomeCard from "../ui/home-card/HomeCard";
import HomeCardHeading from "../ui/home-card/HomeCardHeading";
import { PlayStationIcon } from "../ui/social-icons/PlayStationIcon";
import { SteamIcon } from "../ui/social-icons/SteamIcon";
import { gamesInfo } from "./games-info";
import gamesSpritesheet from "./games-spritesheet.png";
import HomeCardFooterLink from "../ui/home-card/HomeCardFooterLink";

export default function GamesHomeCard(props) {
	const gamesWithPositions = getBackgroundPositionsForSpritesheet(
		gamesInfo.sheetWidth,
		gamesInfo.sheetHeight,
	).map((position, i) => ({
		url: gamesInfo.urls[i],
		position,
	}));

	const steamHorizontalAspectRation = "231 / 87";

	return (
		<HomeCard>
			<HomeCardHeading mb={4}>my favorite games</HomeCardHeading>
			<Grid templateColumns="repeat(3, 1fr)" gap={1} w={350} maxW={350}>
				{gamesWithPositions.slice(0, 6).map((game, i) => (
					<GridItem
						key={i}
						transition={config.styles.hoverTransition}
						_hover={{
							transform: "scale(1.05)",
						}}
					>
						<Link aria-label="Game" href={game.url}>
							<Box
								borderRadius={4}
								sx={{
									imageRendering: "optimizeQuality",
									aspectRatio: steamHorizontalAspectRation,
								}}
								backgroundImage={gamesSpritesheet.src}
								backgroundPosition={game.position}
								backgroundSize={
									gamesInfo.sheetWidth * 100 +
									"% " +
									gamesInfo.sheetHeight * 100 +
									"%"
								}
							/>
						</Link>
					</GridItem>
				))}
			</Grid>
			<Grid
				templateColumns="repeat(4, 1fr)"
				gap={1}
				w={350}
				maxW={350}
				mt={1}
			>
				{gamesWithPositions
					.slice(6, gamesInfo.totalSteamGames)
					.map((game, i) => (
						<GridItem
							key={i}
							transition={config.styles.hoverTransition}
							_hover={{
								transform: "scale(1.05)",
							}}
						>
							<Link aria-label="Game" href={game.url}>
								<Box
									borderRadius={4}
									sx={{
										imageRendering: "optimizeQuality",
										aspectRatio:
											steamHorizontalAspectRation,
									}}
									backgroundImage={gamesSpritesheet.src}
									backgroundPosition={game.position}
									backgroundSize={
										gamesInfo.sheetWidth * 100 +
										"% " +
										gamesInfo.sheetHeight * 100 +
										"%"
									}
								/>
							</Link>
						</GridItem>
					))}
			</Grid>
			<Divider my={2} />
			<Grid
				templateColumns="repeat(4, 1fr)"
				gap={1}
				w={350}
				maxW={350}
				mt={1}
			>
				{gamesWithPositions
					.slice(gamesInfo.totalSteamGames, gamesInfo.urls.length)
					.map((game, i) => (
						<GridItem
							key={i}
							transition={config.styles.hoverTransition}
							_hover={{
								transform: "scale(1.05)",
							}}
						>
							<Link aria-label="Game" href={game.url}>
								<Box
									borderRadius={4}
									sx={{
										imageRendering: "optimizeQuality",
										aspectRatio:
											steamHorizontalAspectRation,
									}}
									backgroundImage={gamesSpritesheet.src}
									backgroundPosition={game.position}
									backgroundSize={
										gamesInfo.sheetWidth * 100 +
										"% " +
										gamesInfo.sheetHeight * 100 +
										"%"
									}
								/>
							</Link>
						</GridItem>
					))}
			</Grid>
			<HomeCardFooterLink
				multi={[
					{
						name: "Steam",
						url: config.socialLinks.steam,
						icon: SteamIcon,
					},
					{
						name: "PlayStation",
						url: config.socialLinks.psnProfiles,
						icon: PlayStationIcon,
					},
					// {
					// 	name: "Osu",
					// 	url: config.socialLinks.osu,
					// 	icon: OsuIcon,
					// },
				]}
			/>
		</HomeCard>
	);
}
