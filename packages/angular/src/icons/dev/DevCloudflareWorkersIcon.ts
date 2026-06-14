import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-cloudflare-workers-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevCloudflareWorkersIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M154.3 37.2 225 164.8l-65 116.8a38 38 0 0 0 0 36.5l65 117.1-70.7 127.6a75 75 0 0 1-31.8-29.9L10 337.4a75 75 0 0 1 0-75L122.5 67a75 75 0 0 1 31.8-29.7"}],["path",{"fill":"currentColor","d":"M160 281.8a38 38 0 0 0 0 36.3l65 117.1-70.7 127.6a75 75 0 0 1-31.8-29.9L10 337.4Q-3.4 314.3 160 282z","opacity":".7"}],["path",{"fill":"currentColor","d":"M161.5 50 225 164.9 214.4 183l-56-94.8c-16.1-26.4-40.8-12.7-71.6 40.7l4.6-8 31.1-54A75 75 0 0 1 154 37.1l7.3 12.9z","opacity":".5"}],["path",{"fill":"currentColor","d":"M477.4 67 590 262.3a75 75 0 0 1 0 75L477.4 533a75 75 0 0 1-64.9 37.5H300l140-252.3c6.2-11.3 6.2-25 0-36.3L300 29.4h112.5a75 75 0 0 1 65 37.5"}],["path",{"fill":"currentColor","d":"m406.7 569.6-111 1L430 317a39 39 0 0 0 0-36.7L295.6 29.4H321l141.1 249.8a39 39 0 0 1-0.1 38.6q-45.6 79.2-90.5 158.7-41 72.3 35.2 93"}],["path",{"fill":"currentColor","d":"M187.4 570.4c-11.5 0-23-2.7-33.1-7.6L293 312.5a26 26 0 0 0 0-25.1L154.3 37.2a75 75 0 0 1 33.1-7.8H300l140 252.4c6.2 11.3 6.2 25 0 36.3L300 570.4z"}],["path",{"fill":"currentColor","d":"M430.1 287.4 287 29.4h13l139.9 252.4c6.3 11.3 6.3 25 0 36.3l-140 252.3h-13l143.2-258a26 26 0 0 0 0-25","opacity":".6"}],["path",{"fill":"currentColor","d":"M293 287.4 154.3 37.2c4.3-2.3 9.5-4 14.4-5.5a20330 20330 0 0 1 135.6 250 37 37 0 0 1 0 36.4L166.5 567.5a62 62 0 0 1-12-4.6l138.4-250.3a26 26 0 0 0 0-25z","opacity":".6"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevCloudflareWorkersIcon;
