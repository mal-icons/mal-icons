import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-money",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfMoney {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 8h2v8H5zm7 0H9c-0.55 0-1 0.45-1 1v6c0 0.550.45 1 1 1h3c0.55 0 1-0.45 1-1V9c0-0.55-0.45-1-1-1zm-1 6h-1v-4h1v4zm7-6h-3c-0.55 0-1 0.45-1 1v6c0 0.550.45 1 1 1h3c0.55 0 1-0.45 1-1V9c0-0.55-0.45-1-1-1zm-1 6h-1v-4h1v4z"}],["path",{"d":"M2 4v16h20V4H2zm2 14V6h16v12H4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfMoney;
