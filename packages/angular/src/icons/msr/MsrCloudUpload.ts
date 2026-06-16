import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-cloud-upload",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrCloudUpload {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M250-160q-86 0-148-62T40-370q0-78 49.5-137.5T217-579q20-97 94-158.5T482-799q113 0 189.5 81.5T748-522v24q72-2 122 46.5T920-329q0 69-50 119t-119 50H510q-24 0-42-18t-18-42v-258l-62 62q-9 9-21 8.5t-21-9.5q-9-9-9-21.5t9-21.5l113-113q5-5 10.13-7 5.13-2 11-2Q486-582 491-580q5 2 10 7l114 114q9 9 9 21t-9 21q-9 9-21.5 9t-21.5-9l-62-61v258h241q45 0 77-32t32-77q0-45-32-77t-77-32h-63v-84q0-89-60.5-153T478-739q-89 0-150 64t-61 153h-19q-62 0-105 43.5T100-371q0 62 43.93 106.5Q187.86-220 250-220h110q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T360-160H250Zm230-290Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrCloudUpload;
