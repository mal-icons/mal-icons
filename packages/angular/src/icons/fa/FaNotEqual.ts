import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fa-not-equal",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FaNotEqual {
  readonly viewBox = "0 0 448 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M369.8 37.4c14.7 9.8 18.7 29.7 8.9 44.4L337.1 144l62.9 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-105.5 0-64 96L400 304c17.7 0 32 14.3 32 32s-14.3 32-32 32l-212.2 0-65.2 97.7c-9.8 14.7-29.7 18.7-44.4 8.9s-18.7-29.7-8.9-44.4L110.9 368 48 368c-17.7 0-32-14.3-32-32s14.3-32 32-32l105.5 0 64-96L48 208c-17.7 0-32-14.3-32-32s14.3-32 32-32l212.2 0 65.2-97.7c9.8-14.7 29.7-18.7 44.4-8.9z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FaNotEqual;
