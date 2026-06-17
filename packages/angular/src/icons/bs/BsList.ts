import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-list",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsList {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M2.5 12a0.50.5 0 0 1 0.5-0.5h10a0.50.5 0 0 1 0 1H3a0.50.5 0 0 1-0.5-0.5m0-4a0.50.5 0 0 1 0.5-0.5h10a0.50.5 0 0 1 0 1H3a0.50.5 0 0 1-0.5-0.5m0-4a0.50.5 0 0 1 0.5-0.5h10a0.50.5 0 0 1 0 1H3a0.50.5 0 0 1-0.5-0.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsList;
