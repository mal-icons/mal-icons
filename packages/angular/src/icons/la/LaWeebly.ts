import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-weebly",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaWeebly {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 6.5 6 C 5.9 6 5.4 6.1 4.8 6.3 C 2.5 7.2 1.4 9.9 2.3 12.2 L 6.8 23.2 C 7.5 24.9 9.1 26 10.9 26 L 11 26 C 12.8 26 14.4 25 15.1 23.4 L 16 21 L 16.9 23.4 C 17.6 25 19.2 26 21 26 L 21.1 26 C 22.9 26 24.5 24.9 25.2 23.2 L 29.7 12.2 C 30.6 9.9 29.5 7.3 27.2 6.3 C 26.6 6.1 26.1 6 25.5 6 C 23.7 6 22 7.1 21.3 8.8 L 20.7 10.5 L 20 8.6 C 19.3 7 17.7 6 16 6 C 15.4 6 14.7 6.1 14.1 6.4 C 13.1 6.9 12.4 7.6 11.9 8.6 L 11.8 8.7 L 11.1 10.6 L 10.5 8.9 C 10 7.1 8.3 6 6.5 6 z M 6.5 8 C 7.5 8 8.4 8.6 8.8 9.5 L 9.3 11.1 L 11.1 16.6 L 13.1 11.2 L 13.7 9.6 L 13.7 9.5 L 13.7 9.4 C 13.9 9 14.3 8.5 15 8.2 C 15.3 8.1 15.6 8 16 8 C 17 8 17.8 8.6 18.3 9.4 L 19 11.2 L 21 16.6 L 22.8 11.1 L 23.3 9.5 C 23.6 8.6 24.5 8 25.5 8 C 25.8 8 26.1 8.1 26.4 8.2 C 27 8.5 27.5 8.9 27.8 9.5 C 28.1 10.1 28.1 10.8 27.8 11.4 L 23.3 22.4 C 22.9 23.4 22 24 21.1 24 L 21 24 C 20 24 19.2 23.4 18.7 22.6 L 17.8 20.3 L 16 15.4 L 14.1 20.3 L 13.2 22.6 C 12.8 23.4 12 24 11 24 C 10 24 9.1 23.4 8.7 22.4 L 4.2 11.4 C 3.9 10.8 4 10.1 4.2 9.5 C 4.5 8.9 4.9 8.4 5.6 8.2 C 5.9 8.1 6.2 8 6.5 8 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaWeebly;
