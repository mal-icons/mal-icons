import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-calendar-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoCalendarSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M32,456a24,24,0,0,0,24,24H456a24,24,0,0,0,24-24V176H32ZM352,212a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H356a4,4,0,0,1-4-4Zm0,80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H356a4,4,0,0,1-4-4Zm-80-80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H276a4,4,0,0,1-4-4Zm0,80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H276a4,4,0,0,1-4-4Zm0,80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H276a4,4,0,0,1-4-4Zm-80-80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H196a4,4,0,0,1-4-4Zm0,80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H196a4,4,0,0,1-4-4Zm-80-80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H116a4,4,0,0,1-4-4Zm0,80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H116a4,4,0,0,1-4-4Z"}],["path",{"d":"M456,64H400.08V32h-48V64H159.92V32h-48V64H56A23.8,23.8,0,0,0,32,87.77V144H480V87.77A23.8,23.8,0,0,0,456,64Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoCalendarSharp;
