import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-purescript",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiPurescript {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.17 4.6l-1.24 1.24 3.97 3.97-3.97 3.97 1.24 1.24 4.58-4.6a0.870.87 0 0 0 0-1.23zM6.96 6.74l1.87 1.75h8.23l-1.87-1.75zm-2.1 2.24l-4.6 4.6a0.870.87 0 0 0 0 1.23l4.6 4.59 1.23-1.24-3.97-3.97 3.97-3.97-1.24-1.24zm3.97 2.14l-1.87 1.76h8.23l1.87-1.76zm-1.87 4.39l1.87 1.75h8.23l-1.87-1.75z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiPurescript;
