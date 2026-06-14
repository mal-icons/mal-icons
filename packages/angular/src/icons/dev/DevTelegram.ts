import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-telegram",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevTelegram {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-telegram-2-a)"}],["path",{"fill":"currentColor","d":"M300 0a300 300 0 1 0 0 600 300 300 0 0 0 0-600"}],["path",{"fill":"currentColor","d":"M135.8 296.8q131.2-57 175-75.3c83.3-34.7 100.6-40.7 111.9-40.9 2.5 0 8 0.6 11.6 3.5 3 2.5 3.8 5.8 4.3 8.10.3 2.40.9 7.70.4 11.8-4.5 47.5-24 162.6-34 215.7-4.1 22.5-12.4 30-20.4 30.8C367 452 353.9 439 337 427.9c-26.4-17.3-41.3-28-67-45-29.5-19.5-10.3-30.2 6.6-47.8 4.4-4.5 81.1-74.4 82.6-80.70.2-0.80.4-3.7-1.4-5.3s-4.3-1-6.2-0.6q-4 1-126.6 83.6a57 57 0 0 1-32.5 12c-10.7-0.2-31.3-6-46.6-11-18.8-6-33.7-9.3-32.4-19.7q0.9-8.1 22.3-16.6"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevTelegram;
