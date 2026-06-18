import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-zhihu",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaZhihu {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 30.63 8.99 C 30.26 9.03 29.7 9.2 29.7 9.2 C 29.7 9.2 21.5 10.1 18.1 10.2 C 18.2 10.7 18.5 11.1 18.9 11.2 C 19.6 11.3 20.1 11.2 21.4 11.2 C 22.6 11.1 23.6 11.1 24.2 11.1 L 24.2 16 L 18 16 C 18 16 18.1 17.2 19.2 17.2 L 24.2 17.2 L 24.2 20.6 C 24.2 21.3 23.7 21.7 23 21.7 C 22.3 21.7 21.8 21.6 21 21.6 C 21.1 21.8 21.2 22.3 21.9 22.7 C 22.4 22.9 22.7 23 23.2 23 C 24.7 23 25.5 22.1 25.5 20.7 L 25.5 17.2 L 31.6 17.2 C 32 17.2 32 16 31.9 16.1 L 25.4 16.1 L 25.4 11.2 C 25.6 11.2 26 11.1 26.5 11.1 C 28.6 11 30 10.7 30.9 10.7 C 30.9 10.7 31.5 9.3 30.9 9 C 30.85 8.98 30.75 8.97 30.63 8.99 z M 3.3 9 C 3.3 9 2.1 9 1.7 10.1 C 1.6 10.5 0.9 12.1 0 13.9 C 0.3 13.9 1.2 13.8 1.8 12.8 C 1.9 12.5 2.2 12.3 2.3 11.9 L 3.8 11.9 C 3.8 12.4 3.7 15.5 3.7 15.8 L 1.1 15.8 C 0.5 15.8 0.3 17 0.3 17 L 3.5 17 C 3.3 19.4 2.1 21.1 0 22.8 C 1 23.1 2 22.8 2.6 22.4 C 2.6 22.4 3.8 21.5 4.4 19.1 L 6.9 22 C 6.9 22 7.3 20.6 6.8 20 C 6.4 19.5 5.6 18.6 5.1 18.2 L 4.4 18.8 C 4.6 18.1 4.8 17.7 4.8 17 L 8 17 C 8 17 8 15.8 7.6 15.8 L 4.9 15.8 C 5 14.5 5 13 5 11.9 L 7.4 11.9 C 7.4 11.9 7.5 10.8 7 10.8 L 2.6 10.8 C 2.8 10.1 3 9.7 3.3 9 z M 9 11 L 9 22 L 10.2 22 L 10.6 23.3 L 12.7 22 L 15 22 L 15 11 L 9 11 z M 29.29 12.18 C 29.12 12.19 28.95 12.25 28.8 12.4 L 27 14.8 L 28 15.5 C 29.1 14.2 30.3 12.6 30.3 12.6 C 30.3 12.6 29.79 12.15 29.29 12.18 z M 10.2 12.2 L 13.7 12.2 L 13.7 20.8 L 12.5 20.8 L 11.1 21.7 L 10.8 20.8 L 10.2 20.8 L 10.2 12.2 z M 20.13 12.35 C 19.71 12.32 19.2 12.6 19.2 12.6 C 19.2 12.6 21.2 15.4 21.3 15.5 L 22.3 14.8 C 22.3 14.8 21 13 20.5 12.5 C 20.4 12.4 20.27 12.36 20.13 12.35 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaZhihu;
