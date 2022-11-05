import { Box, Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

export function MyHistory() {
  return (
    <Box>
      <Typography
        variant="h5"
        color="secondary.main"
        sx={{ textAlign: "left", fontWeight: "bold" }}
      >
        経歴
      </Typography>
      <Box>
        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0,
            },
          }}
        >
          <TimelineItem>
            <TimelineOppositeContent color="textMain">
              2022/10
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Reality 株式会社</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="textMain">
              2022/09
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>株式会社 RevComm</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="textMain">
              2022/08
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>株式会社 エクサウィザーズ</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="textMain">
              2022/04
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              京都大学 情報学研究科 知能情報学専攻 修士課程 入学
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="textMain">
              2022/03
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              東北大学 工学部 電気情報物理工学科 卒業
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="textMain">
              2022/03
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>株式会社 サイバーエージェント</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="textMain">
              2022/02
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              ソニー・インタラクティブエンタテインメント
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="textMain">
              2021/09
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>サイボウズ 株式会社</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="textMain">
              2021/02
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>株式会社 リクルート</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="textMain">
              2020/08
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>株式会社 メディアドゥ</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="textMain">
              2020/07
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>株式会社 ユニキャスト</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="textMain">
              2018/04
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              東北大学 工学部 電気情報物理工学科 入学
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </Box>
  );
}
