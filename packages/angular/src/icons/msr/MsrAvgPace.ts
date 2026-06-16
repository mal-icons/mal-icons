import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-avg-pace",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrAvgPace {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M609.86-770Q593-770 581.5-781.64t-11.5-28.5Q570-827 581.64-838.5t28.5-11.5Q627-850 638.5-838.36t11.5 28.5Q650-793 638.36-781.5t-28.5 11.5Zm0 660Q593-110 581.5-121.64t-11.5-28.5Q570-167 581.64-178.5t28.5-11.5Q627-190 638.5-178.36t11.5 28.5Q650-133 638.36-121.5t-28.5 11.5Zm160-520Q753-630 741.5-641.64t-11.5-28.5Q730-687 741.64-698.5t28.5-11.5Q787-710 798.5-698.36t11.5 28.5Q810-653 798.36-641.5t-28.5 11.5Zm0 380Q753-250 741.5-261.64t-11.5-28.5Q730-307 741.64-318.5t28.5-11.5Q787-330 798.5-318.36t11.5 28.5Q810-273 798.36-261.5t-28.5 11.5Zm60-190Q813-440 801.5-451.64t-11.5-28.5Q790-497 801.64-508.5t28.5-11.5Q847-520 858.5-508.36t11.5 28.5Q870-463 858.36-451.5t-28.5 11.5ZM80-479.84Q80-638 186-752t261-127q13-1 23 7.63T480-850q0 12-7.95 20.77Q464.11-820.46 452-819q-132 11-222 108.13t-90 230.96Q140-345 230-248.5T452-141q12.11 1.48 20.05 10.33Q480-121.81 480-110q0 12.75-10 21.38T447-81Q292-94 186-207.84t-106-272ZM479.91-410Q451-410 430.5-430.56 410-451.12 410-480q0-5.94 1-12.47t3-11.86L355-563q-9-9-9-21t9-21q9-9 21-8.5t21 8.5l60 59q5-2 23-4 28.88 0 49.44 20.59Q550-508.82 550-479.91 550-451 529.41-430.5q-20.59 20.5-49.5 20.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrAvgPace;
