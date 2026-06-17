import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-upc",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsUpc {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 4.5a0.50.5 0 0 1 1 0v7a0.50.5 0 0 1-1 0zm2 0a0.50.5 0 0 1 1 0v7a0.50.5 0 0 1-1 0zm2 0a0.50.5 0 0 1 1 0v7a0.50.5 0 0 1-1 0zm2 0a0.50.5 0 0 1 0.5-0.5h1a0.50.5 0 0 1 0.50.5v7a0.50.5 0 0 1-0.50.5h-1a0.50.5 0 0 1-0.5-0.5zm3 0a0.50.5 0 0 1 1 0v7a0.50.5 0 0 1-1 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsUpc;
