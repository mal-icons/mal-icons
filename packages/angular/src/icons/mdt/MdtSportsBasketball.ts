import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-sports-basketball",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtSportsBasketball {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.93 11H11V4.07c-1.730.22-3.290.99-4.5 2.13A7.99 7.99 0 0 1 8.93 11zm11 0a8.12 8.12 0 0 0-1.16-3.25c-0.870.87-1.47 1.99-1.68 3.25h2.84zM5.23 7.75A8.12 8.12 0 0 0 4.07 11h2.84a5.97 5.97 0 0 0-1.68-3.25zM4.07 13a8.12 8.12 0 0 0 1.16 3.25c0.87-0.87 1.47-1.99 1.68-3.25H4.07zm2.44 4.79A7.99 7.99 0 0 0 11 19.93V13H8.93a7.95 7.95 0 0 1-2.42 4.79zM17.5 6.2A7.97 7.97 0 0 0 13 4.07V11h2.07a7.99 7.99 0 0 1 2.43-4.8zm1.27 10.05A7.78 7.78 0 0 0 19.93 13h-2.84c0.21 1.260.81 2.38 1.68 3.25zM13 13v6.93c1.73-0.22 3.29-1 4.49-2.14A7.95 7.95 0 0 1 15.07 13H13z","opacity":".3"}],["path",{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM5.23 7.75C6.1 8.62 6.7 9.74 6.91 11H4.07a8.12 8.12 0 0 1 1.16-3.25zM4.07 13h2.84a5.97 5.97 0 0 1-1.68 3.25A8.12 8.12 0 0 1 4.07 13zM11 19.93c-1.73-0.22-3.29-1-4.49-2.14A7.95 7.95 0 0 0 8.93 13H11v6.93zM11 11H8.93A7.99 7.99 0 0 0 6.5 6.2 8.04 8.04 0 0 1 11 4.07V11zm8.93 0h-2.84c0.21-1.260.81-2.38 1.68-3.250.60.97 1.01 2.07 1.16 3.25zM13 4.07c1.730.22 3.290.99 4.5 2.13a7.99 7.99 0 0 0-2.43 4.8H13V4.07zm0 15.86V13h2.07a8.01 8.01 0 0 0 2.42 4.79A7.99 7.99 0 0 1 13 19.93zm5.77-3.68A6 6 0 0 1 17.09 13h2.84a8.12 8.12 0 0 1-1.16 3.25z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtSportsBasketball;
