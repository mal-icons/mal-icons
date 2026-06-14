import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-morpheus-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevMorpheusIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-morpheus-icon-1-a)"}],["path",{"fill":"currentColor","d":"M590.4 375.2C558 506 438.7 599 298.4 599c-141 0-259-98.6-290.3-230l89 0.2 9.60.1c12.3-0.6 27.6-4.6 37.9-29.5l39-102L270 446.4c7.8 16.6 20.8 15.4 28.5 15.4h0.8c15.1 0 21.7-5.3 27.4-16.3l97.8-206 33.4 92.8 2 4.5c7 15.5 12.1 30.8 29.6 32.8 3.60.4 45.4-0.3 101.7-0.3z"}],["path",{"fill":"currentColor","d":"M600 298.1v5.5h-90l-52.4-146.5c-4.7-10.9-11.7-27.2-32.2-27.2-12.5 0-23.8 10.3-30.2 27.4L300 377.5l-91.5-218.9c-9-19.4-15.2-28.6-33.1-28.6-12.2 0-21.1 4.5-30.8 27.5L90.3 305.8l-90.2-0.1-0.1-6.8A298 298 0 0 1 298.4 1C463.2 1 600 133.3 600 298.1"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevMorpheusIcon;
