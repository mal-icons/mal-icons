import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-c-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevCSharp {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-c-sharp-1-a)"}],["path",{"fill":"currentColor","d":"M300 600a300 300 0 1 0 0-600 300 300 0 0 0 0 600"}],["path",{"fill":"currentColor","fill-opacity":".1","d":"M91.2 84.6 515 509.2A300 300 0 1 1 91.2 84.6"}],["path",{"fill":"currentColor","d":"M285.3 408.3a138 138 0 0 1-65.6 13.9 105 105 0 0 1-80.8-32.5 120 120 0 0 1-30.2-85.2c-1.5-33.9 10.8-67 34-91.6a116 116 0 0 1 86.9-34.8c19-0.7 38 2.5 55.7 9.4V217a113 113 0 0 0-56.3-14 86 86 0 0 0-65.6 27.2c-17.5 20-26.6 46-25.3 72.6a98 98 0 0 0 23.6 68.8 80 80 0 0 0 62 25.6c21.70.6 43-5 61.7-15.8zM494.6 248l-3.7 17.4h-43.1L437.4 315h46.4l-4.5 17.4H434l-14.6 65.7h-20.7l14.2-65.7h-41.3l-13.9 65.7h-20.2l13.9-65.7h-43.5l3.3-17.4h43.6l10-49.4h-45.6l3.5-17.4h45.6l14-66.3H403l-13.9 66.3h41.6l14.1-66.3h20.3l-13.9 66.3zm-67.2 17.4h-41.6L375 315h41.8z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevCSharp;
