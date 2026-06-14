import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-unito",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevUnito {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M246 313.2c0 5.8 0 13 4.2 18.7a19 19 0 0 0 15.2 6.5c5.80.2 11.4-2.2 15.2-6.5 4.2-5.5 4.2-12.5 4.2-18.7V263h14.8v52c0 10.7-1 18.7-8 26a35 35 0 0 1-26.4 10.6c-9.90.1-19.4-3.7-26.4-10.7-6.9-7.6-8-15.5-8-25.9v-52h15.4v50.3m175.6 33h13.8v-85.7h-13.8zm7.1-128.6c5.70.3 10 5 10 10.7s-4.3 10.4-10 10.7a10.3 10.3 0 0 1-10-10.7 10.3 10.3 0 0 1 10-10.7m55.2 56v72.6h-14.5v-72.6h-9v-14h9v-31.1h14.5v31.1h14.5v14zM323 348v-52.2c0-10.6 1-18.6 8-25.9a35 35 0 0 1 26.4-10.6c9.9-0.2 19.4 3.7 26.4 10.6 7 7.7 8 15.6 8 26v52h-14.9v-50.3c0-5.7 0-13-4.1-18.6a19 19 0 0 0-15.2-6.5 19 19 0 0 0-15.2 6.5c-4.2 5.6-4.2 12.5-4.2 18.6V348zm201.7-43.3c0 21.4 14.6 32 29.9 32s29.8-11 29.8-32c0-21.4-14.3-32-29.8-32s-30 11-30 32m-15.2 0a44 44 0 0 1 45.2-45.4 44 44 0 0 1 45.3 45.4c0 26.3-19.4 45-45.3 45a43.6 43.6 0 0 1-45.2-45"}],["path",{"fill":"currentColor","d":"m151.9 296.6-0.2 21.7c0 2.2-1.7 4-4 4.2-2.2-0.2-4-2-4-4.2l0.2-21.7c0-12.4-10-22.5-22.4-22.5-11.2 0-21.2 9.8-22.1 22v0.8l-0.4 8.4v0.5a30.4 30.4 0 1 1-60.7-0.6v-0.1h-0.1v-20.8a4 4 0 0 1 4-3.9 4 4 0 0 1 4 3.8L46 305a22.4 22.4 0 1 0 44.9 0v-0.7l0.3-7.6v-0.9a31 31 0 0 1 30.1-29.5 30.5 30.5 0 0 1 30.4 30.6q0.3-0.70.2-0.3m-56.5-91.7a95 95 0 1 0 94.7 95.5v-0.4c0.1-52.4-42.3-95-94.7-95"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevUnito;
