import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-money",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtMoney {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 10h1v4h-1zm6 0h1v4h-1zM4 18h16V6H4v12zm10-9c0-0.550.45-1 1-1h3c0.55 0 1 0.45 1 1v6c0 0.55-0.45 1-1 1h-3c-0.55 0-1-0.45-1-1V9zM8 9c0-0.550.45-1 1-1h3c0.55 0 1 0.45 1 1v6c0 0.55-0.45 1-1 1H9c-0.55 0-1-0.45-1-1V9zM5 8h2v8H5V8z","opacity":".3"}],["path",{"d":"M15 16h3c0.55 0 1-0.45 1-1V9c0-0.55-0.45-1-1-1h-3c-0.55 0-1 0.45-1 1v6c0 0.550.45 1 1 1zm1-6h1v4h-1v-4zm-7 6h3c0.55 0 1-0.45 1-1V9c0-0.55-0.45-1-1-1H9c-0.55 0-1 0.45-1 1v6c0 0.550.45 1 1 1zm1-6h1v4h-1v-4zM5 8h2v8H5zM2 4v16h20V4H2zm18 14H4V6h16v12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtMoney;
