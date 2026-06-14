import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-designernews",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevDesignernews {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-designernews-2-a)"}],["path",{"fill":"currentColor","d":"M300 600a300 300 0 1 0 0-600 300 300 0 0 0 0 600"}],["path",{"fill":"currentColor","d":"M300 600a300 300 0 1 0 0-600 300 300 0 0 0 0 600"}],["g",{"mask":"url(#devicon-designernews-3-b)"}],["path",{"fill":"currentColor","d":"m90.7 414.2 251.6 187.1 618.8 39-474.2-439v100.1l-44.2-31.6-82.3-68.4-49 79.9-69-57.5-121-7.7z"}],["path",{"fill":"currentColor","d":"M278.5 307.4c0-63.6-39-106.7-113.5-106.7H91.5v214h75c72.3 0 112-43.7 112-107.3m-53.30.3c0 46-23.6 65.8-61.4 65.8h-19.3V242h19.3c36.2 0 61.4 20.7 61.4 65.7m264.6 107v-214h-49.4v119.7l-78.7-119.7h-51.5v214h49.3v-128l84.4 128z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevDesignernews;
