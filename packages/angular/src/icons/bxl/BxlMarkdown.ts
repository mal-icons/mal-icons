import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxl-markdown",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxlMarkdown {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.55 18.15H3.45a1.44 1.44 0 0 1-1.44-1.44V7.29c0-0.790.65-1.44 1.44-1.44h17.11c0.8 0 1.440.65 1.44 1.44v9.42a1.44 1.44 0 0 1-1.44 1.44zM6.81 15.27V11.52l1.92 2.4 1.92-2.4v3.75h1.92V8.73h-1.92l-1.92 2.4-1.92-2.4H4.89v6.54h1.92zM19.69 12h-1.92V8.73h-1.92V12h-1.92l2.88 3.36L19.69 12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxlMarkdown;
