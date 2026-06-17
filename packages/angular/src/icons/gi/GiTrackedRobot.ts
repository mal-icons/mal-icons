import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-tracked-robot",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiTrackedRobot {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M231.38 25l-6 30H240v18h-18.22l-4.35 21.74L229.56 119H247V96h18v23h17.44l12.13-24.26L290.22 73H272V55h14.62l-6-30h-49.25zM104.32 71.49l-13.46 39.09H151V86.55l-46.68-15.06zm303.36 0L361 86.55v24.03h60.14l-13.46-39.09zM170.06 105l14.54 130.87L211.73 263h88.55l27.13-27.13L341.95 105h-32.38l-16 32h-75.12l-16-32h-32.38zm-69.33 14.03l-10.99 29.04 41.06 9.54 10.99-29.04-41.06-9.54zm269.5 9.55l10.99 29.03 41.06-9.54-7.38-19.49h-44.67zM100.3 169l8.93 59.19 29.67-4.48-7.16-47.4-31.44-7.3zm311.4 0l-31.44 7.3-7.16 47.4 29.67 4.48 8.93-59.19zM192 183h128v18H192v-18zm-54.09 59.06l-24.37 3.68c1.58 7.41 4.13 13.44 7.98 19.4 3.66 5.67 9.14 11.73 15.77 18.35-1.14-13.14-1.7-27.580.63-41.43zm236.18 0c2.32 13.85 1.77 28.290.63 41.43 6.63-6.63 12.11-12.68 15.77-18.35 3.85-5.96 6.39-11.99 7.98-19.4l-24.37-3.68zM217 281v51.27L243.73 359h24.55L295 332.27V281h-78zM99.77 313L89 323.95V327h62v-3.27L140.27 313H99.77zm272 0L361 323.95V327h62v-3.27L412.27 313h-40.51zM89 345v14h62v-14H89zm272 0v14h62v-14h-62zm-153 3.73l-7 7V405l27.12-36.16L208 348.73zm96 0l-20.12 20.12L311 405v-49.27l-7-7zM169 361v62h14v-62h-14zm160 0v62h14v-62h-14zM89 377v14h62v-14H89zm272 0v14h62v-14h-62zM89 409v14h62v-14H89zm272 0v14h62v-14h-62zM89 441v14h62v-14H89zm272 0v14h62v-14h-62zM89 473v14h62v-14H89zm272 0v14h62v-14h-62z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiTrackedRobot;
