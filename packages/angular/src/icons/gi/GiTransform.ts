import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-transform",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiTransform {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M128 32a96 96 0 0 0-96 96 96 96 0 0 0 96 96 96 96 0 0 0 30.29-4.99L140.29 201.02l64.35-64.35 6.36-6.36 11.86 11.86A96 96 0 0 0 224 128a96 96 0 0 0-96-96zm83.01 123.76l-45.26 45.26L252.73 288l-23.47 23.47 115.24 23.05-23.05-115.24-23.47 23.47-86.98-86.98zM353.56 288l13.89 69.46L288 341.57V480h192V288H353.56z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiTransform;
