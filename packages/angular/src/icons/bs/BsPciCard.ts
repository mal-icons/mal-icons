import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-pci-card",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsPciCard {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 1.5A0.50.5 0 0 1 0.5 1h1a0.50.5 0 0 1 0.50.5V4h13.5a0.50.5 0 0 1 0.50.5v7a0.50.5 0 0 1-0.50.5H2v2.5a0.50.5 0 0 1-1 0V2H0.5a0.50.5 0 0 1-0.5-0.5"}],["path",{"d":"M3 12.5h3.5v1a0.50.5 0 0 1-0.50.5H3.5a0.50.5 0 0 1-0.5-0.5zm4 0h4v1a0.50.5 0 0 1-0.50.5h-3a0.50.5 0 0 1-0.5-0.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsPciCard;
