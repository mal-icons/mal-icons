import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-level-two",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiLevelTwo {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256 16c-22.5 72-45 72-45 120 0 0 22.5 24 45 24s45-24 45-24c0-48-22.5-48-45-120zm2.63 144.03A90 96 0 0 0 166 256a90 96 0 0 0 180 0 90 96 0 0 0-87.37-95.97zM256 352c-22.5 0-45 24-45 24 0 48 22.5 48 45 120 22.5-72 45-72 45-120 0 0-22.5-24-45-24z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiLevelTwo;
