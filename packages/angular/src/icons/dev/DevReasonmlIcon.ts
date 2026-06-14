import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-reasonml-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevReasonmlIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-reasonml-icon-1-a)"}],["path",{"fill":"currentColor","d":"M600 0H0v600h600z"}],["path",{"fill":"currentColor","d":"M354.7 545.3H287L253.7 482h-44.4v63.3h-59.8v-229h103c60.7 0 95.3 29.4 95.3 80.4 0 34.6-14.4 60.1-40.8 73.8zM209.3 364v70.3h43.5c24.1 0 38.2-12.4 38.2-35.6 0-22.6-14-34.7-38.2-34.7zM386 316.4h180.7V364H445.8v42.8H555v47.4l-109 0.3v43.1h124v47.7H386z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevReasonmlIcon;
