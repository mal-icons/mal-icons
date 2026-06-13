import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-exit-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoExitSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M335.69,272h-161V240h161V92a12,12,0,0,0-12-12h-280a12,12,0,0,0-12,12V420a12,12,0,0,0,12,12h280a12,12,0,0,0,12-12Z"}],["polygon",{"points":"419.06 272 355.06 336 377.69 358.63 480.31 256 377.69 153.37 355.06 176 419.06 240 335.69 240 335.69 272 419.06 272"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoExitSharp;
