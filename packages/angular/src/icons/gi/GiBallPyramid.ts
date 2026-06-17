import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-ball-pyramid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiBallPyramid {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256 50c-21.6 0-39 17.35-39 39 0 21.6 17.4 39 39 39s39-17.4 39-39c0-21.65-17.4-39-39-39zm-48 89c-21.6 0-39 17.4-39 39s17.4 39 39 39 39-17.4 39-39-17.4-39-39-39zm96 0c-21.6 0-39 17.4-39 39s17.4 39 39 39 39-17.4 39-39-17.4-39-39-39zm-144 90c-21.6 0-39 17.4-39 39s17.4 39 39 39 39-17.4 39-39-17.4-39-39-39zm96 0c-21.6 0-39 17.4-39 39s17.4 39 39 39 39-17.4 39-39-17.4-39-39-39zm96 0c-21.6 0-39 17.4-39 39s17.4 39 39 39 39-17.4 39-39-17.4-39-39-39zm-240 89.4c-21.65 0-39 17.4-39 39s17.35 39 39 39c21.6 0 39-17.4 39-39s-17.4-39-39-39zm96 0c-21.6 0-39 17.4-39 39s17.4 39 39 39 39-17.4 39-39-17.4-39-39-39zm96 0c-21.6 0-39 17.4-39 39s17.4 39 39 39 39-17.4 39-39-17.4-39-39-39zm96 0c-21.6 0-39 17.4-39 39s17.4 39 39 39 39-17.4 39-39-17.4-39-39-39zM64 409c-21.65 0-39 17.4-39 39s17.35 39 39 39 39-17.4 39-39-17.35-39-39-39zm96 0c-21.6 0-39 17.4-39 39s17.4 39 39 39 39-17.4 39-39-17.4-39-39-39zm96 0c-21.6 0-39 17.4-39 39s17.4 39 39 39 39-17.4 39-39-17.4-39-39-39zm96 0c-21.6 0-39 17.4-39 39s17.4 39 39 39 39-17.4 39-39-17.4-39-39-39zm96 0c-21.6 0-39 17.4-39 39s17.4 39 39 39 39-17.4 39-39-17.4-39-39-39z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiBallPyramid;
