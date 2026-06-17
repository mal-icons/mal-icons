import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-tag",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsTag {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a0.50.5 0 1 0-1 0 0.50.5 0 0 0 1 0"}],["path",{"d":"M2 1h4.59a1 1 0 0 1 0.710.29l7 7a1 1 0 0 1 0 1.41l-4.59 4.59a1 1 0 0 1-1.41 0l-7-7A1 1 0 0 1 1 6.59V2a1 1 0 0 1 1-1m0 5.59 7 7L13.59 9l-7-7H2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsTag;
