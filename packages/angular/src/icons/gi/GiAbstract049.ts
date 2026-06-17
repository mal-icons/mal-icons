import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-abstract-049",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiAbstract049 {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m491,21-99.12,57.87 99.12,57.72v-115.59zm0,146.43-99.12-57.87v115.59l99.12-57.72zm0,30.7-99.12,57.72 99.12,57.87v-115.59zm0,146.29-99.12-57.57v115.59l99.12-58.02zm0,30.99-99.12,57.72 99.12,57.87v-115.59zm-123.57-354.41-99.12,57.87 99.12,57.72v-115.59zm0,146.43-99.12-57.87v115.59l99.12-57.72zm0,30.7-99.12,57.72 99.12,57.87v-115.59zm0,146.29-99.12-57.57v115.59l99.12-58.02zm0,30.99-99.12,57.72 99.12,57.87v-115.59zm-123.73-296.54-99.12-57.87v115.59l99.12-57.72zm0,30.7-99.12,57.87 99.12,57.72v-115.59zm0,146.29-99.12-57.72v115.59l99.12-57.87zm0,30.99-99.12,57.58 99.12,58.02v-115.59zm0,146.29-99.12-57.72v115.59l99.12-57.87zm-123.57-354.26-99.12-57.87v115.59l99.12-57.72zm0,30.7-99.12,57.87 99.12,57.72v-115.59zm0,146.29-99.12-57.72v115.59l99.12-57.87zm0,30.99-99.12,57.58 99.12,58.02v-115.59zm0,146.29-99.12-57.72v115.59l99.12-57.87z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiAbstract049;
