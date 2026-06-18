import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-whmcs",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaWhmcs {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 14.8 4 L 14.2 6.8 L 13 7.1 L 11 5 L 9.1 6.1 L 9.9 9 L 9.1 9.8 L 6.2 9 L 5.1 10.9 L 7.2 13 L 6.9 14 L 4 14.8 L 4 17 L 6.9 17.8 L 7.2 19 L 5.2 21 L 6.2 22.9 L 9.2 22.1 L 9.9 23 L 9 25.7 L 11 26.9 L 13 24.8 L 14.1 25.1 L 14.8 28 L 17.1 28 L 17.8 25.1 L 19 24.8 L 21.1 26.9 L 23.1 25.7 L 22.2 22.9 L 23 22.1 L 25.9 22.9 L 26.9 20.9 L 24.8 19 L 25 17.8 L 28 17.1 L 28 15 L 25.4 14.1 L 25.8 15.2 L 25.9 15.6 L 25.6 15.8 L 24.5 16.4 L 24.2 16.6 L 23.9 16.3 L 23 15.3 L 22.9 15.3 L 22.6 16.6 L 22.5 17 L 22.1 17 L 21.4 17 C 20.9 19.5 18.6 21.4 15.9 21.4 C 12.7 21.4 10.2 18.8 10.2 15.7 C 10.2 13 12.2 10.8 14.7 10.2 L 14.7 9.5 L 14.7 9.2 L 15 9.1 L 16.3 8.7 L 15.4 7.8 L 15.2 7.6 L 15.4 7.3 L 16 6.3 L 16.2 6 L 16.5 6.2 L 17.7 6.5 L 17.1 4 L 14.8 4 z M 21 4 L 20.7 5.4 L 20 5.6 L 19 4.5 L 18 5.1 L 18.4 6.6 L 17.9 7 L 16.4 6.6 L 15.8 7.6 L 16.9 8.7 L 16.8 9.2 L 15.3 9.6 L 15.3 10.8 L 16.9 11.2 L 17 11.9 L 15.8 13 L 16.4 14 L 18 13.6 L 18.4 14.1 L 18 15.5 L 19.1 16.1 L 20.1 15 L 20.7 15.2 L 21.1 16.7 L 22.3 16.7 L 22.7 15.2 L 23.3 15 L 24.4 16.2 L 25.5 15.5 L 24.9 14 L 25.3 13.6 L 26.8 14.1 L 27.3 13 L 26.2 12 L 26.3 11.3 L 28 10.9 L 28 9.8 L 26.5 9.3 L 26.4 8.7 L 27.5 7.6 L 27 6.6 L 25.3 7 L 24.9 6.6 L 25.3 5.1 L 24.3 4.5 L 23.2 5.6 L 22.6 5.4 L 22.2 4 L 21 4 z M 21.6 7.3 C 23.3 7.3 24.6 8.7 24.6 10.3 C 24.7 12 23.3 13.3 21.6 13.3 C 19.9 13.3 18.6 11.9 18.6 10.3 C 18.6 8.6 20 7.3 21.6 7.3 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaWhmcs;
