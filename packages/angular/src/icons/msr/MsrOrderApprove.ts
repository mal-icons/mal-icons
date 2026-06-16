import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-order-approve",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrOrderApprove {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m704-224-17-17q-9-9-21.5-9t-21.5 9q-9 9-9 21t9 21l44 44q6.82 7 15.91 7Q713-148 720-155l102-100q9-9 9-21.5t-9-21.5q-9-9-21.5-9t-21.5 9l-75 74ZM270-620h420q12.75 0 21.38-8.68 8.63-8.68 8.63-21.5 0-12.82-8.62-21.32T690-680H270q-12.75 0-21.37 8.68-8.62 8.68-8.62 21.5 0 12.83 8.63 21.33T270-620ZM732.5-41Q655-41 600-96.5T545-228q0-78.43 54.99-133.72Q654.98-417 733-417q77 0 132.5 55.28Q921-306.43 921-228q0 76-55.5 131.5T732.5-41ZM120-87v-693q0-24.75 17.63-42.37T180-840h600q24.75 0 42.38 17.63T840-780v327q-14.17-6.86-29.08-11.43Q796-469 780-472v-308H180v599h310q2.89 18.17 8.94 34.59Q505-130 513-114l-24 22q-5 4-10.5 4t-9.5-4l-38-38q-4.64-5-10.82-5Q414-135 409-130l-38 38q-4.64 5-10.82 5Q354-87 349-92l-38-38q-4.64-5-10.82-5Q294-135 289-130l-38 38q-4.64 5-10.82 5Q234-87 229-92l-38-38q-4.64-5-10.82-5Q174-135 169-130l-38 38q-1 1-11 5Zm150-193h221.92q4.08-16 8.58-31t12.5-29H270q-12.75 0-21.37 8.68-8.62 8.68-8.62 21.5 0 12.83 8.63 21.33T270-280Zm0-170h354q22-11 46-17.5t50-8.5q0-14-8.5-24T690-510H270q-12.75 0-21.37 8.68-8.62 8.68-8.62 21.5 0 12.83 8.63 21.33T270-450Zm-90 269v-599 599Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrOrderApprove;
