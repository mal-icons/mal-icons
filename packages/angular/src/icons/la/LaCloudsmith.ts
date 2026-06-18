import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-cloudsmith",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaCloudsmith {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 18.85 3 C 16.44 3 14.29 4.95 14.29 7.35 C 14.29 9.76 12.76 11.29 10.35 11.29 C 7.95 11.29 6 13.44 6 15.85 C 6 18.26 7.95 20 10.35 20 C 12.76 20 14.71 18.27 14.71 15.86 C 14.71 13.44 16.44 11.71 18.85 11.71 C 21.25 11.71 23 9.76 23 7.35 C 23 4.95 21.25 3 18.85 3 z M 19.51 20 C 17.02 20 15 22.02 15 24.49 C 15 26.99 17.02 29 19.51 29 C 21.99 29 24 26.99 24 24.49 C 24 22.02 21.99 20 19.51 20 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaCloudsmith;
