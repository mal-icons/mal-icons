import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-stimulus-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevStimulusIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-stimulus-icon-1-a)"}],["path",{"fill":"currentColor","d":"M600 335.6v105.9H476.5q-15.7-0.7-29.8-7.4l-3.1-1.6-30-17.4a33 33 0 0 0-28.1-1l-1.9 1-38.4 22.5a10 10 0 0 0-1 17.3l1 0.6 80.8 47.4c9 5 19 8 29.4 8.8l3.40.2H600v70.6a17.7 17.7 0 0 1-16 17.4l-1.60.1H17.6c-9 0-16.5-6.9-17.5-15.7l-0.1-1.5v-70.6h140.8a76 76 0 0 0 29.7-7.4l3.1-1.6 270-158.6a77 77 0 0 1 29.5-8.8l3.4-0.2zm0-176.8v105.9H459.2q-15.60.8-29.7 7.4l-3.1 1.6-270 158.7a77 77 0 0 1-29.5 8.8l-3.40.2H0V335.5h140.8q15.6-0.8 29.7-7.4l3.1-1.6 270-158.7a77 77 0 0 1 29.5-8.8l3.4-0.2zM582.4 0c9.1 0 16.6 7 17.5 15.8l0.1 1.5v70.6H459.2a76 76 0 0 0-29.7 7.4l-3.1 1.6-270 158.6c-9.1 5-19.2 7.9-29.5 8.8l-3.40.2H0V158.6h123.5q15.70.8 29.8 7.4l3.1 1.6 30 17.5a33 33 0 0 0 28 1l2-1 38.4-22.6a10 10 0 0 0 1-17.2L174 97.2a77 77 0 0 0-29.4-8.8l-3.4-0.2H0V17.6C0 8.4 7.10.8 16.20.1l1.4-0.1z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevStimulusIcon;
