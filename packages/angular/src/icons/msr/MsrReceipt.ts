import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-receipt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrReceipt {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120-88v-786h2.5q2.5 0 7.5 5l40 40q5 5 10 5t10-5l40-40q5-5 10-5t10 5l40 40q5 5 10 5t10-5l40-40q5-5 10-5t10 5l40 40q5 5 10 5t10-5l40-40q5-5 10-5t10 5l40 40q5 5 10 5t10-5l40-40q5-5 10-5t10 5l40 40q5 5 10 5t10-5l40-40q5-5 10-5t10 5l40 40q5 5 10 5t10-5l40-40q5-5 7.5-5h2.5v786l-2.5 1q-2.5 1-7.5-4l-40-40q-5-5-10-5t-10 5l-40 40q-5 5-10 5t-10-5l-40-40q-5-5-10-5t-10 5l-40 40q-5 5-10 5t-10-5l-40-40q-5-5-10-5t-10 5l-40 40q-5 5-10 5t-10-5l-40-40q-5-5-10-5t-10 5l-40 40q-5 5-10 5t-10-5l-40-40q-5-5-10-5t-10 5l-40 40q-5 5-10 5t-10-5l-40-40q-5-5-10-5t-10 5l-40 40q-5 5-7.5 4l-2.5-1Zm147-208h430q13 0 21.5-8.5T727-326q0-13-8.5-21.5T697-356H267q-13 0-21.5 8.5T237-326q0 13 8.5 21.5T267-296Zm0-154h430q13 0 21.5-8.5T727-480q0-13-8.5-21.5T697-510H267q-13 0-21.5 8.5T237-480q0 13 8.5 21.5T267-450Zm0-155h430q13 0 21.5-8.5T727-635q0-13-8.5-21.5T697-665H267q-13 0-21.5 8.5T237-635q0 13 8.5 21.5T267-605Zm-87 423h600v-596H180v596Zm0-596v596-596Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrReceipt;
