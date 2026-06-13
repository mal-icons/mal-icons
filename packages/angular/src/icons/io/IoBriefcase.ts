import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-briefcase",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoBriefcase {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M336,80H176a16,16,0,0,0-16,16v16H352V96A16,16,0,0,0,336,80Z","fill":"none"}],["path",{"d":"M496,176a64.07,64.07,0,0,0-64-64H384V96a48.05,48.05,0,0,0-48-48H176a48.05,48.05,0,0,0-48,48v16H80a64.07,64.07,0,0,0-64,64v48H496ZM352,112H160V96a16,16,0,0,1,16-16H336a16,16,0,0,1,16,16Z"}],["path",{"d":"M336,264a24,24,0,0,1-24,24H200a24,24,0,0,1-24-24v-4a4,4,0,0,0-4-4H16V400a64,64,0,0,0,64,64H432a64,64,0,0,0,64-64V256H340a4,4,0,0,0-4,4Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoBriefcase;
