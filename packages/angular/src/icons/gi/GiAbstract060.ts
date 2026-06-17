import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-abstract-060",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiAbstract060 {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m21,21v448.26l100.02-100.02c-25.74-30.64-41.27-70.1-41.27-113.24 0-97.34 78.91-176.25 176.25-176.25 43.14,0 82.6,15.54 113.24,41.27l100.17-100.02h-448.41zm470,21.59-100.17,100.02c25.82,30.66 41.42,70.17 41.42,113.39 0,97.34-78.91,176.25-176.25,176.25-43.22,0-82.73-15.6-113.39-41.42l-100.17,100.17h448.56v-448.41zm-235,65.36c-35.39,0-67.79,12.47-93.27,33.19l65.65,65.65c8.16-4.59 17.58-7.2 27.61-7.2 31.15,0 56.4,25.25 56.4,56.4 0,10.03-2.6,19.45-7.2,27.61l65.65,65.65c20.72-25.47 33.19-57.87 33.19-93.27 0-81.77-66.28-148.05-148.05-148.05zm-114.86,54.78c-20.72,25.47-33.19,57.87-33.19,93.27 0,81.77 66.28,148.05 148.05,148.05 35.39,0 67.79-12.47 93.27-33.19l-65.65-65.65c-8.16,4.59-17.58,7.2-27.61,7.2-31.15,0-56.4-25.25-56.4-56.4 0-10.03 2.6-19.45 7.2-27.61l-65.65-65.65z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiAbstract060;
