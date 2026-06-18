import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-game",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxGame {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.94 7.53C19.23 4.12 15.8 2 12 2 6.49 2 2 6.49 2 12s4.49 10 10 10c3.8 0 7.23-2.12 8.94-5.53a1 1 0 0 0-0.4-1.32L15.02 12l5.52-3.15c0.46-0.260.64-0.840.4-1.32zm-8.43 3.6a11 0 0 0 0 1.74l6.17 3.53A7.95 7.95 0 0 1 12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8a7.95 7.95 0 0 1 6.68 3.61l-6.17 3.53z"}],["circle",{"cx":"11.5","cy":"7.5","r":"1.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxGame;
