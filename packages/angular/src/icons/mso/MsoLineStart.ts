import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-line-start",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoLineStart {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M170-390q-37.8 0-63.9-26.14t-26.1-64Q80-518 106.1-544t63.9-26q29.09 0 52.54 17T255-510h625v60H255q-9 26-32.46 43T170-390Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoLineStart;
