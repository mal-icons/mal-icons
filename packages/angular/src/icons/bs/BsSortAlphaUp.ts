import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-sort-alpha-up",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsSortAlphaUp {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M10.08 5.63 9.66 7H8.6l1.79-5.33h1.23L13.4 7h-1.12l-0.42-1.37zm1.57-0.78L11 2.69h-0.05l-0.65 2.16z"}],["path",{"d":"M12.96 14H9.03v-0.69l2.58-3.72v-0.05H9.1v-0.87h3.79v0.69l-2.57 3.72v0.05h2.65zm-8.46-0.5a0.50.5 0 0 1-1 0V3.71L2.35 4.85a0.50.5 0 1 1-0.71-0.71l2-20.01-0.01a0.50.5 0 0 1 0.70.01l2 2a0.50.5 0 1 1-0.710.71L4.5 3.71z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsSortAlphaUp;
