import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-subway",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoSubway {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M352,16H160A64.07,64.07,0,0,0,96,80V336a64.07,64.07,0,0,0,64,64H352a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,352,16ZM208,64h96a16,16,0,0,1,0,32H208a16,16,0,0,1,0-32ZM176,352a32,32,0,1,1,32-32A32,32,0,0,1,176,352Zm160,0a32,32,0,1,1,32-32A32,32,0,0,1,336,352Zm48-160a16,16,0,0,1-16,16H144a16,16,0,0,1-16-16V160a16,16,0,0,1,16-16H368a16,16,0,0,1,16,16Z"}],["path",{"d":"M347.31,420.69a16,16,0,0,0-22.62,22.62l4.68,4.69H182.63l4.68-4.69a16,16,0,0,0-22.62-22.62l-48,48a16,16,0,1,0,22.62,22.62L150.63,480H361.37l11.32,11.31a16,16,0,0,0,22.62-22.62Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoSubway;
