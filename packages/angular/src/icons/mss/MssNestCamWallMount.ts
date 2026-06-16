import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-nest-cam-wall-mount",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssNestCamWallMount {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M154.96-263Q124-263 102-285.03 80-307.06 80-338v-304.59Q80-674 102.04-696t53-22Q186-718 208-696.5q22 21.5 22 52.5 33-62 94.23-100 61.23-38 135.77-38 52 0 99.5 19.5T644-706l229 229-367 367-230-228q-14-14-25.5-29.5T230-400v62q0 30.94-22.04 52.97-22.04 22.03-53 22.03ZM270-523q0 38 14.5 73t41.55 62.05L506-208l268-269-179.95-179.95Q567-684 532.65-698.5 498.31-713 460.26-713 381-713 325.5-657.58 270-602.17 270-523Zm252 62Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssNestCamWallMount;
