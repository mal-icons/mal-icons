import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-babelio",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiBabelio {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.28 0a13.99 13.99 0 0 1-6.57 7.59v4.69a20.54 20.54 0 0 0 6.57-3.68zm3.28 7.7a22.12 22.12 0 0 1-13.13 7.03v4.21a35.55 35.55 0 0 0 3.84-0.56 35.12 35.12 0 0 0 9.3-3.32zm3.28 7.33a36.75 36.75 0 0 1-19.7 5.69V24h19.7Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiBabelio;
