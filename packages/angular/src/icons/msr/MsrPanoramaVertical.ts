import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-panorama-vertical",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrPanoramaVertical {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M200-80q-17 0-28.5-11.5T160-120q0-8 9.5-35.5T190-229q11-46 20.5-108.5T220-480q0-80-9.5-142.5T190-731q-11-46-20.5-73.5T160-840q0-17 11.5-28.5T200-880h560q17 0 28.5 11.5T800-840q0 8-9.5 35.5T770-731q-11 46-20.5 108.5T740-480q0 80 9.5 142.5T770-229q11 46 20.5 73.5T800-120q0 17-11.5 28.5T760-80H200Zm80-400q0 87-12 172.5T227-140h505q-28-82-40-167.5T680-480q0-87 12-172.5T732-820H227q29 82 41 167.5T280-480Zm200 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrPanoramaVertical;
