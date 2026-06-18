import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-train",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsTrain {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.38 2H7.62c-0.22 0-1.40.07-2.5 1.35C4.03 4.62 4 5.86 4 6v11a2 2 0 0 0 2 2h1l-2 3h2.35l0.67-1h8l0.68 1H19l-2-3h1a2 2 0 0 0 2-2V6c0-0.19-0.03-1.43-1.13-2.66C17.72 2.04 16.51 2 16.38 2zM10 4h4v2h-4V4zM7.5 17a1.5 1.5 0 1 1 0-3A1.5 1.5 0 0 1 7.5 17zm9 0a1.5 1.5 0 1 1 0-3A1.5 1.5 0 0 1 16.5 17zm1.5-5H6V8h12v4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsTrain;
