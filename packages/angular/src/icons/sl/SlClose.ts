import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-close",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlClose {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M512 0C229.23 0 0 229.23 0 512c0 282.78 229.23 512 512 512 282.78 0 512-229.22 512-512C1024 229.23 794.78 0 512 0zm0 961.01c-247.02 0-448-201.98-448-449.01 0-247.02 200.98-448 448-448s448 200.98 448 448-200.98 449.01-448 449.01zm181.01-630.02c-12.5-12.5-32.75-12.5-45.25 0L512 466.75l-135.76-135.76c-12.5-12.5-32.75-12.5-45.26 0-12.5 12.5-12.5 32.75 0 45.25L466.74 512l-135.76 135.76c-12.5 12.48-12.5 32.77 0 45.25 12.5 12.5 32.75 12.5 45.26 0L512 557.25l135.76 135.76c12.5 12.5 32.75 12.5 45.25 0 12.5-12.48 12.5-32.77 0-45.25L557.25 512l135.76-135.76c12.51-12.51 12.51-32.77 0-45.25z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlClose;
