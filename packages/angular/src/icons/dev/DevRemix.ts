import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-remix",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevRemix {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M474 270v105h-37.8V270zm48.7-0.2 17.3 25 17.8-25h39l-37.9 49.9 41.1 55h-41.8l-20.7-28.5-20.8 28.5h-39l40.8-53.4-37.5-51.5zm-136-3.3c28.4 0 37 19.6 37.1 41.2v66.5H386v-59.8l-0.1-0.8v-0.7l-0.1-0.8v-0.3l-0.1-0.8v-0.7c-1.2-9-4.7-13.7-13.7-13.7-10.7 0-15.4 7.5-16.5 19.4v0.8l-0.3 5.4v52h-37.8v-59.4l-0.1-0.8v-1.1l-0.2-0.8v-0.7c-1-9.7-4.6-14.8-14-14.8-12.2 0-16.7 10.1-16.8 25.6v52h-37.8V269.3h37.8v15.8c5.6-11.5 16.9-18.6 32.5-18.6 18.4 0 28 8.5 32.4 20.7a38 38 0 0 1 35.5-20.7M187 263.2c34.4 0 52.8 23.5 53.2 51.6v11.4h-73c0.9 13 10.2 19 21.7 19 10.1 0 16.6-3.4 20.1-11.4l0.2-0.3 30.3 2.8c-5.4 24-24.5 37.4-52 37.4-33.4 0-57.2-20.2-57.2-53.6a55 55 0 0 1 56.7-57M70.7 225c38.2 0 57.1 18.2 57.1 47.1 0 21.7-13.3 35.9-31.3 38.2 15.2 3 24 11.8 25.7 29l0.2 3.20.3 3 0.1 2.70.2 2.1v2.5l0.2 1.4v2.2l0.1 2.1v1.2l0.1 2v3.2l0.1 3.2v5.2H84.2v-4l0.1-3.7V356l-0.1-1.6-0.1-1.7v-1l-0.1-1.4-0.1-1.5-0.2-2V345c-1.2-15.8-7.5-20.2-19.1-20.7H0v-31h63.7c16.9 0 25.3-5.1 25.3-18.8 0-12-8.4-19.3-25.3-19.3H0V225zM41.6 350.3c5.1 0 7.3 2.9 8 5.6l0.20.3v0.5l0.10.3v0.5l0.10.3v15.5H0v-23zm145-59.8c-9.5 0-14.9 4.5-17.4 11.3l-0.20.5-0.20.5-0.5 1.6-0.10.6-0.3 1.1v0.6l-0.10.3-0.10.6v0.3h36.6c-0.5-9.4-6.6-17.4-17.8-17.4m287.6-63.7V260H436v-33.3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevRemix;
