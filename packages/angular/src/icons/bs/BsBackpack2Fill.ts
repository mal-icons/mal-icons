import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-backpack2-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBackpack2Fill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 13h6v-3h-1v0.5a0.50.5 0 0 1-1 0V10H5z"}],["path",{"d":"M6 2v0.34C3.67 3.17 2 5.39 2 8v1.19l-1.170.59A1.5 1.5 0 0 0 0 11.12V13.5A1.5 1.5 0 0 0 1.5 15h1c0.460.61 1.18 1 2 1h7c0.82 0 1.54-0.39 2-1h1a1.5 1.5 0 0 0 1.5-1.5v-2.38a1.5 1.5 0 0 0-0.83-1.34L14 9.19V8a6 6 0 0 0-4-5.66V2a2 2 0 1 0-4 0m2-1a1 1 0 0 1 1 1v0.08a6 6 0 0 0-2 0V2a1 1 0 0 1 1-1m0 3a4 4 0 0 1 3.96 3.430.50.5 0 1 1-0.990.14 3 3 0 0 0-5.94 0 0.50.5 0 1 1-0.99-0.14A4 4 0 0 1 8 4M4.5 9h7a0.50.5 0 0 1 0.50.5v4a0.50.5 0 0 1-0.50.5h-7a0.50.5 0 0 1-0.5-0.5v-4a0.50.5 0 0 1 0.5-0.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBackpack2Fill;
