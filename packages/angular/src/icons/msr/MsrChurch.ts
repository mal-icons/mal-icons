import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-church",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrChurch {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M140-80q-24.75 0-42.37-17.62T80-140v-210q0-17.9 9.5-32.45Q99-397 116-405l129-57v-94q0-17.49 9-31.56 9-14.07 24-22.44l172-88v-82h-50q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T400-840h50v-50q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T510-890v50h50q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T560-780h-50v82l172 88q15 8.37 24 22.44 9 14.07 9 31.56v94l129 57q17 8 26.5 22.55Q880-367.9 880-350v210q0 24.75-17.62 42.38T820-80H530v-160q0-21.25-14.32-35.62Q501.35-290 480.18-290 459-290 444.5-275.62 430-261.25 430-240v160H140Zm0-60h230v-102q0-46 32.12-79 32.12-33 78-33Q526-354 558-321q32 33 32 79v102h230v-214l-165-73v-133l-175-91-175 91v133l-165 73v214Zm340.06-285Q503-425 519-441.06q16-16.06 16-39T518.94-519q-16.06-16-39-16T441-518.94q-16 16.06-16 39T441.06-441q16.06 16 39 16ZM480-396Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrChurch;
